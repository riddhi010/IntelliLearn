from flask import Flask, render_template, request
from googleapiclient.discovery import build

app = Flask(__name__)

YOUTUBE_API_KEY = 'AIzaSyCy7Ehb7crHBG2LZ1hcn_VCEVlZYtQP7qI'
youtube = build('youtube', 'v3', developerKey=YOUTUBE_API_KEY)

# Function to search YouTube videos based on query and preferences
def search_youtube_courses(query, max_results=5):
    request = youtube.search().list(
        q=query,
        part='snippet',
        type='video',
        maxResults=max_results,
        videoCaption='closedCaption'
    )
    response = request.execute()
    courses = []
    for item in response['items']:
        video = {
            'title': item['snippet']['title'],
            'description': item['snippet']['description'],
            'url': f"https://www.youtube.com/watch?v={item['id']['videoId']}"
        }
        courses.append(video)
    return courses

# Homepage with the form for personalized course suggestions
@app.route('/')
def home():
    return render_template('home.html')

# Route to handle personalized course suggestions based on user input
@app.route('/personalized', methods=['POST'])
def personalized():
    interests = request.form.get('interests')
    time = request.form.get('time')
    experience = request.form.get('experience')
    depth = request.form.get('depth')

    query = f"{interests} {experience} {depth} course"
    courses = search_youtube_courses(query)
    
    return render_template('personalized.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True)
