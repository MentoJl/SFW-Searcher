from flask import Flask, render_template

app = Flask(__name__)

@app.route('/account')
def mainWindow():
    return render_template("./template_NSFW/main.html")

@app.route('/')
def regWindow():
    return render_template("./template_NSFW/account.html")

if __name__ == "__main__":
    app.run()