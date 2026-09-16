const API_URL = "https://b5yb4phu3k.execute-api.ap-south-1.amazonaws.com/upload";

const generateBtn =
    document.getElementById("generateBtn");

const pdfFile =
    document.getElementById("pdfFile");

const subject =
    document.getElementById("subject");

const studyTime =
    document.getElementById("studyTime");

const status =
    document.getElementById("status");


generateBtn.addEventListener("click", async () => {

    if (!pdfFile.files.length) {

        status.textContent =
            "Please select a PDF.";

        return;
    }


    if (!subject.value.trim()) {

        status.textContent =
            "Please enter a subject.";

        return;
    }


    const file =
        pdfFile.files[0];


    if (file.type !== "application/pdf") {

        status.textContent =
            "Only PDF files are allowed.";

        return;
    }


    status.textContent =
        "Uploading PDF to AWS...";


    try {

        const arrayBuffer =
            await file.arrayBuffer();


        const response =
            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/pdf"
                },

                body: arrayBuffer

            });


        const data =
            await response.json();


        console.log("AWS Response:", data);


        if (!response.ok) {

            throw new Error(
                data.error || "Upload failed"
            );

        }


        status.textContent =
            "✅ PDF uploaded successfully!";


        console.log("File:", data.file);


    } catch (error) {

        console.error(error);

        status.textContent =
            "❌ Upload failed: " + error.message;

    }

});