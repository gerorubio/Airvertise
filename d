[1mdiff --git a/pages/ipfs/index.tsx b/pages/ipfs/index.tsx[m
[1mdeleted file mode 100644[m
[1mindex 7f854a4..0000000[m
[1m--- a/pages/ipfs/index.tsx[m
[1m+++ /dev/null[m
[36m@@ -1,115 +0,0 @@[m
[31m-import React, { useState, useEffect } from "react"[m
[31m-import { NextPage } from "next"[m
[31m-import { IHomePage } from "@Interfaces"[m
[31m-import { serverSideTranslations } from "next-i18next/serverSideTranslations"[m
[31m-import { useTranslation } from "next-i18next"[m
[31m-import { useSigner } from "wagmi"[m
[31m-import { create, CID, IPFSHTTPClient } from "ipfs-http-client";[m
[31m-import { Box, Button } from "@mui/material"[m
[31m-[m
[31m-const Home: NextPage<IHomePage.IProps> = () => {[m
[31m-  const { t } = useTranslation()[m
[31m-[m
[31m-  const { data: walletConnectSigner } = useSigner()[m
[31m-[m
[31m-  const projectId = "2K70ZZxkaYl7rrLOUQ9G9lMi9qx";[m
[31m-  const projectSecret = "b1794790993bfad931a4fae2d2b45c7e";[m
[31m-  const authorization = "Basic " + btoa(projectId + ":" + projectSecret);[m
[31m-[m
[31m-  let ipfs: IPFSHTTPClient | undefined;[m
[31m-  try {[m
[31m-    ipfs = create({[m
[31m-      url: "https://ipfs.infura.io:5001/api/v0",[m
[31m-      headers: {[m
[31m-        authorization,[m
[31m-      }[m
[31m-[m
[31m-    });[m
[31m-  } catch (error) {[m
[31m-    console.error("IPFS error ", error);[m
[31m-    ipfs = undefined;[m
[31m-  }[m
[31m-[m
[31m-  const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);[m
[31m-  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {[m
[31m-    event.preventDefault();[m
[31m-    const form = event.target as HTMLFormElement;[m
[31m-    const files = (form[0] as HTMLInputElement).files;[m
[31m-  [m
[31m-    if (!files || files.length === 0) {[m
[31m-      return alert("No files selected");[m
[31m-    }[m
[31m-  [m
[31m-    const file = files[0];[m
[31m-    // upload files[m
[31m-    const result = await (ipfs as IPFSHTTPClient).add(file);[m
[31m-  [m
[31m-    setImages([[m
[31m-      ...images,[m
[31m-      {[m
[31m-        cid: result.cid,[m
[31m-        path: result.path,[m
[31m-      },[m
[31m-    ]);[m
[31m-  [m
[31m-    form.reset();[m
[31m-  };[m
[31m-[m
[31m-  // Preview image before submit[m
[31m-  const [selectedImage, setSelectedImage] = useState(null);[m
[31m-  const [imageUrl, setImageUrl] = useState(null);[m
[31m-[m
[31m-  useEffect(() => {[m
[31m-    if (selectedImage) {[m
[31m-      setImageUrl(URL.createObjectURL(selectedImage));[m
[31m-    }[m
[31m-  }, [selectedImage]);[m
[31m-[m
[31m-  return ([m
[31m-    <div className="App">[m
[31m-      <header className="App-header">[m
[31m-        {!ipfs && ([m
[31m-          <p>Oh oh, Not connected to IPFS. Checkout out the logs for errors</p>[m
[31m-        )}[m
[31m-        {ipfs && ([m
[31m-          <>[m
[31m-            <p>Upload File using IPFS</p>[m
[31m-[m
[31m-            <form onSubmit={onSubmitHandler}>[m
[31m-              <input accept="image/*" name="file" type="file" onChange={(e) => setSelectedImage(e.target.files[0])} />[m
[31m-              {imageUrl && selectedImage && ([m
[31m-                <Box mt={2} textAlign="center">[m
[31m-                  <div>Image Preview:</div>[m
[31m-                  <img src={imageUrl} alt={selectedImage.name} height="100px" />[m
[31m-                </Box>[m
[31m-              )}[m
[31m-[m
[31m-              <button type="submit">Upload File</button>[m
[31m-            </form>[m
[31m-[m
[31m-            <div>[m
[31m-              {images.map((image, index) => ([m
[31m-                <img[m
[31m-                  alt={`Uploaded #${index + 1}`}[m
[31m-                  src={"https://airvertise.infura-ipfs.io/ipfs/" + image.path}[m
[31m-                  style={{ maxWidth: "400px", margin: "15px" }}[m
[31m-                  key={image.cid.toString() + index}[m
[31m-                />[m
[31m-              ))}[m
[31m-            </div>[m
[31m-          </>[m
[31m-        )}[m
[31m-      </header>[m
[31m-    </div>[m
[31m-  )[m
[31m-}[m
[31m-[m
[31m-export const getServerSideProps = async ({ locale }) => {[m
[31m-  return {[m
[31m-    props: {[m
[31m-      ...(await serverSideTranslations(locale, ["common"])),[m
[31m-    },[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-export default Home[m
[1mdiff --git a/src/Components/CampaignForm/index.tsx b/src/Components/CampaignForm/index.tsx[m
[1mindex df91fae..4c33325 100644[m
[1m--- a/src/Components/CampaignForm/index.tsx[m
[1m+++ b/src/Components/CampaignForm/index.tsx[m
[36m@@ -70,10 +70,8 @@[m [mconst CampaignForm: React.FunctionComponent<ICampaignForm.IProps> = observer(()[m
     }[m
 [m
     // IPFS config[m
[31m-    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;[m
[32m+[m[32m    const projectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;[m
     const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;[m
[31m-    // const projectId = "2K70ZZxkaYl7rrLOUQ9G9lMi9qx";[m
[31m-    // const projectSecret = "b1794790993bfad931a4fae2d2b45c7e";[m
     const authorization = "Basic " + btoa(projectId + ":" + projectSecret);[m
   [m
     let ipfs: IPFSHTTPClient | undefined;[m
