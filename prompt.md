# AI-Powered Legal Assistant App

## Overview

This application serves as a bridge between individuals seeking legal advice and legal professionals. By leveraging the power of OpenAI's GPT-4, the app aims to simplify the initial consultation process, guiding users through a series of questions to better understand their situation and subsequently connecting them with the most suitable legal professional.

## Features

- **User Interaction Interface**: A simple interface for users to describe their situation and receive AI-generated guidance.
- **AI Interaction**: Uses OpenAI's GPT-4 to generate questions, provide guidance, offer resources, and collect feedback.
- **Legal Brief Generation**: Based on user interactions, a concise legal brief is generated to assist legal professionals.
- **Attorney Matching**: Connects users with an appropriate attorney based on their specific case.

## Core Classes and Methods

### AI

- `generate_questions(user_input)`: Generates follow-up questions based on user input.
- `provide_guidance(user_input)`: Provides customized guidance based on user input and generated questions.
- `provide_resources(user_input)`: Offers additional resources and referrals based on user input and guidance.
- `collect_feedback(feedback)`: Collects user feedback.

### LegalAssistant

- `ask_questions(user_input)`: Presents AI-generated questions to the user.
- `receive_answers(answers)`: Receives user's answers.
- `create_legal_brief(answers)`: Generates a legal brief based on user's answers.
- `connect_to_attorney(legal_brief)`: Connects the user to an appropriate attorney.

### Attorney

- `get_attorney()`: Retrieves attorney information (this can be expanded to fetch from a database).
- `match_attorney(legal_brief)`: Matches the user with an attorney based on their case.

## Setup and Installation

1. Ensure you have Python (3.6 or newer) installed.
2. Install the required libraries:
   ```bash
   pip install Flask openai
   ```
3. Clone this repository or download the source files.
4. Replace `'YOUR_OPENAI_API_KEY'` in `server.py` with your actual OpenAI API key.
5. Navigate to the directory containing `server.py` and run:
   ```bash
   python server.py
   ```
6. The server will start and be accessible at `http://localhost:5000`.

## Usage

1. Open a web browser and visit `http://localhost:5000`.
2. Describe your legal situation in the provided text area.
3. Click "Get Guidance" to receive AI-generated guidance.
4. Provide feedback if desired.

## Future Enhancements

- **Database Integration**: Integrate a database to store user interactions, feedback, and attorney information.
- **Advanced Attorney Matching**: Implement a more sophisticated algorithm for matching users with attorneys based on expertise and user needs.
- **User Accounts**: Allow users to create accounts, track their cases, and communicate with matched attorneys.

## Contributing

Contributions are welcome! Please read the contributing guidelines to get started.

## License

This project is licensed under the MIT License.

