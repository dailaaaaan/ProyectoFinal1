from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/productos'
db = SQLAlchemy(app)

@app.route('/')
def index():
    query = text('SELECT * FROM productos')
    products = db.session.execute(query).fetchall()
    return render_template('index.html', products=products)


if __name__ == '__main__':
    app.run(debug=True)