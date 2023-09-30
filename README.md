# AI-Powered Legal Assistant

Streamline initial legal consultations with the power of AI. Our platform bridges the gap between individuals seeking legal advice and legal professionals, providing a seamless and efficient experience.

## Features

- **Dynamic Conversational AI**: Engage in a natural conversation with our AI, which can ask follow-up questions based on user responses.
- **Document Drafting**: Auto-generate basic legal documents based on the information provided.
- **Legal Reference Lookup**: Quickly pull relevant statutes, case laws, or regulations based on user input.

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm (for the frontend)

### Installation

1. **Backend Setup**:
    - Navigate to the backend directory.
    - Install the required Python packages:
      ```bash
      pip install flask openai
      ```

2. **Frontend Setup**:
    - Navigate to the frontend directory.
    - Install the required npm packages:
      ```bash
      npm install
      ```

### Running the Application

1. **Backend**:
    - Set your OpenAI API key as an environment variable:
      ```bash
      export OPENAI_API_KEY='your_api_key_here'
      ```
    - Run the Flask app:
      ```bash
      python app.py
      ```

2. **Frontend**:
    - Navigate to the frontend directory and start the React app:
      ```bash
      npm start
      ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or the port you've configured).
2. Engage with the AI assistant via the chatbox.
3. Use the provided features to draft documents or look up legal references.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

This `README.md` provides an overview of the project, its features, and instructions on how to set it up and run it. You can further customize it based on any additional features or details you'd like to include.