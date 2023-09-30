from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = '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'

@app.route('/ask', methods=['POST'])
def ask_openai():
    question = request.json.get('question')
    response = openai.Completion.create(engine="davinci", prompt=question, max_tokens=150)
    return jsonify(response.choices[0].text.strip())

@app.route('/draft_document', methods=['POST'])
def draft_document():
    details = request.json.get('details')
    # For the demo, we'll use a simple template for a legal document.
    document = f"""
    LEGAL DOCUMENT

    Regarding the incident on {details['date']}:

    Description:
    {details['description']}

    Parties Involved:
    {details['parties']}

    Witness:
    {details['witness']}

    This document is generated for reference and should be reviewed by a legal professional.
    """
    return jsonify(document)

@app.route('/get_reference', methods=['POST'])
def get_reference():
    topic = request.json.get('topic')
    # Simulate a reference lookup. In a real-world scenario, this could be integrated with a legal database.
    references = {
        "car accident": "See Case Law XYZ v. ABC, Statute 1234.56",
        "personal injury": "Refer to Case Law DEF v. GHI, Regulation 7890.12"
    }
    return jsonify(references.get(topic, "No reference found."))

if __name__ == '__main__':
    app.run(debug=True)
