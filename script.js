document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log("Form submitted"); // Check if the submit event is firing

    // Collect form data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    // Prepare data to send
    const bookingData = { name, age, destination, date };
    console.log("Booking data:", bookingData); // Log booking data for verification

    try {
        // Send POST request to the backend API
        const response = await fetch("http://localhost:3000/api/add-travel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingData),
        });

        // Check if request was sent
        console.log("Request sent, awaiting response...");

        // Parse the JSON response
        const result = await response.json();
        console.log("Response received:", result); // Log the response

        // Display success or error message
        if (response.ok) {
            document.getElementById("message").textContent = result.message;
            document.getElementById("bookingForm").reset();
            console.log("Booking successful:", result.message);
        } else {
            document.getElementById("message").textContent = "Error booking travel: " + result.message;
            console.error("Booking error:", result.message);
        }
    } catch (error) {
        console.error("Error connecting to server:", error);
        document.getElementById("message").textContent = "Error connecting to server.";
    }
});
