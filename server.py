from flask import Flask, render_template

app = Flask(__name__)

# Route for the main entry page (index.html)
@app.route('/')
def home():
    return render_template('index.html')

# Route for the introduction to symbolism (symbolism.html)
@app.route('/symbolism')
def symbolism():
    return render_template('symbolism.html')


# Route for the previous page (previous.html)
@app.route('/previous')
def previous():
    return render_template('previous.html')

# Route for the Arnolfini Portrait page (arnolfini.html)
@app.route('/arnolfini')
def arnolfini():
    return render_template('arnolfini.html')


# Route for the next page (next.html)
@app.route('/next')
def next():
    return render_template('next.html')

# Route for the Jan van Eyck page (jan-van-eyck.html)
@app.route('/jan-van-eyck')
def jan_van_eyck():
    return render_template('jan-van-eyck.html')

# Route for the Portrait of Giovanni Arnolfini and his Wife page
@app.route('/portrait-of-giovanni-arnolfini-and-his-wife')
def arnolfini_detail():
    return render_template('portrait-of-giovanni-arnolfini-and-his-wife.html')

# Route for the Detail Elements page
@app.route('/detail-elements-of-arnolfini')
def detail_elements():
    return render_template('detail-elements-of-arnolfini.html')

@app.route('/quiz1')
def quiz1():
    return render_template('quiz1.html')

@app.route('/quiz2')
def quiz2():
    return render_template('quiz2.html')

@app.route('/quiz3')
def quiz3():
    return render_template('quiz3.html')

@app.route('/quiz4')
def quiz4():
    return render_template('quiz4.html')

@app.route('/quiz5')
def quiz5():
    return render_template('quiz5.html')

@app.route('/quiz6')
def quiz6():
    return render_template('quiz6.html')

@app.route('/quiz7')
def quiz7():
    return render_template('quiz7.html')

@app.route('/quiz8')
def quiz8():
    return render_template('quiz8.html')

@app.route('/congrate')
def congrate():
    return render_template('congrate.html')

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True)
