
export default function Resume() {
    return (

        <div className="about max-w-2xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-center text-2xl font-mono mt-4 shadow-md">Shayan Daijavad Resume</h1>
            <div className="flex justify-center mt-4">
                <a className="hover:text-green-300 text-2xl font-mono mt-4 shadow-md" href="/assets/pdfs/Shayan%20Daijavad%20Resume.pdf"  download>Download Resume</a>
            </div>
            <iframe src="/assets/pdfs/Shayan Daijavad Resume.pdf" width="100%" height="600px">
                This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/pdfs/Shayan%20Daijavad%20Resume.pdf">Download PDF</a>.
            </iframe>
        </div>
    )
}