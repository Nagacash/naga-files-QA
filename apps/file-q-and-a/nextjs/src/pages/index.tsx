import Head from "next/head";
import { useState } from "react";

import FileQandAArea from "../components/FileQandAArea";
import { FileLite } from "../types/file";
import FileUploadArea from "../components/FileUploadArea";

export default function FileQandA() {
  const [files, setFiles] = useState<FileLite[]>([]);

  return (
    
    <div className="flex items-left text-left h-screen flex-col">
            <div className="bg-black sticky top-0 p-8"><div className="text-white text-center">Powered by Naga Apparel</div></div>

      <Head>
        <title>File Q&A</title>
      </Head>
      <div className="max-w-3xl mx-auto m-8 space-y-8 text-gray-800">
        <h1 className="text-4xl "><div className="w-[200px]"><img  src="../NAGA.png" alt="naga"  /></div> File Q&A</h1>

        <div className="">
          To search for answers from the content in your files (summarize a pdf for example), upload them here
          and to find answers from your
          relevant documents.
        </div>

        <FileUploadArea
          handleSetFiles={setFiles}
          maxNumFiles={75}
          maxFileSizeMB={30}
        />

        <FileQandAArea files={files} />
      </div>
      <div className="bg-black p-8"><div className="text-white text-center text-sm">Designed by Maurice Holda - 2023</div></div>
    </div>
  );
}
