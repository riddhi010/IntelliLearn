from transformers import pipeline
from flask import Flask, request, jsonify

# Initialize the text-generation model
chatbot = pipeline('text-generation', model='microsoft/DialoGPT-medium')

# Create a Flask web application
app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({'error': 'No message provided'}), 400

    # Generate response
    response = chatbot(user_input, max_length=100, num_return_sequences=1)
    bot_response = response[0]['generated_text']

    return jsonify({'response': bot_response}), 200

if __name__ == '__main__':
    app.run(port=5000)
