import React, { useState, useEffect } from "react"
import { NextPage } from "next"
import { IHomePage } from "@Interfaces"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useSigner } from "wagmi"
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import { Box, Button } from "@mui/material"

const Home: NextPage<IHomePage.IProps> = () => {
  const { t } = useTranslation()

  const { data: walletConnectSigner } = useSigner()

  const projectId = "2K70ZZxkaYl7rrLOUQ9G9lMi9qx";
  const projectSecret = "b1794790993bfad931a4fae2d2b45c7e";
  const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

  let ipfs: IPFSHTTPClient | undefined;
  try {
    ipfs = create({
      url: "https://ipfs.infura.io:5001/api/v0",
      headers: {
        authorization,
      }

    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }

  const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const files = (form[0] as HTMLInputElement).files;
  
    if (!files || files.length === 0) {
      return alert("No files selected");
    }
  
    const file = files[0];
    // upload files
    const result = await (ipfs as IPFSHTTPClient).add(file);
  
    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);
  
    form.reset();
  };

  // Preview image before submit
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="App">
      <header className="App-header">
        {!ipfs && (
          <p>Oh oh, Not connected to IPFS. Checkout out the logs for errors</p>
        )}
        {ipfs && (
          <>
            <p>Upload File using IPFS</p>

            <form onSubmit={onSubmitHandler}>
              <input accept="image/*" name="file" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />
              {imageUrl && selectedImage && (
                <Box mt={2} textAlign="center">
                  <div>Image Preview:</div>
                  <img src={imageUrl} alt={selectedImage.name} height="100px" />
                </Box>
              )}

              <button type="submit">Upload File</button>
            </form>

            <div>
              {images.map((image, index) => (
                <img
                  alt={`Uploaded #${index + 1}`}
                  src={"https://airvertise.infura-ipfs.io/ipfs/" + image.path}
                  style={{ maxWidth: "400px", margin: "15px" }}
                  key={image.cid.toString() + index}
                />
              ))}
            </div>
          </>
        )}
      </header>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

export default Home
