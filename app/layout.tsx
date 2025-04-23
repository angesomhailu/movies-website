import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Haha",
  description: "Generated the website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
            <body> 
           <div className='main'>
             <div className='gradient'/>
           </div>
           <main className='app'>   
            
              {children}
           </main>
           </body>
        </html>
  );
}
