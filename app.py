
################
# Dependencies#
################

from flask import Flask, jsonify, render_template, request, redirect



import pandas as pd
import numpy as np
import json
import re

from sqlalchemy import create_engine, inspect
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
from sqlalchemy import func

from config import db_key


###################
# Set up Flask #
###################

# Flask Setup
app = Flask(__name__)

###################
#Set up database#
###################

rds_connection_string = f"postgres:{db_key}@localhost:5432/solar"
engine = create_engine(f'postgresql://{rds_connection_string}')
#Base = automap_base()
#Base.prepare(engine, reflect=True)
#rint(engine.table_names())
#print (Base.classes.keys())

#Solar_consumption = Base.classes['solar_consumption']
#Capacity = Base.classes['installed_solar_capacity']

##################
# Flask Routes
###################

# Return the dashboard homepage
@app.route("/")
def index():
    return render_template("index.html")

# Return the consumption page
@app.route("/consumption")
def consumption():
    return render_template("consumption.html")


# Return the capacity page
@app.route("/capacity")
def capacity():
    return render_template("capacity.html")

# base queries
sql_capacity = "select * from installed_solar_capacity"
sql_consumption = "select * from solar_consumption"

# generic get data function
def get_data(sql_statement):
    session = Session(engine)
    data = pd.read_sql_query(sql_statement, con=session.connection())
    data_dict = data.to_dict(orient="rows")
    session.close()
    return data_dict


@app.route("/api/consumption")
def api_consumption():
    data = get_data(sql_consumption)
    return jsonify(data)

@app.route("/api/capacity")
def api_capacity():
    return jsonify(get_data(sql_capacity))

@app.route("/api")
def api_all_data():
    data = {
        "consumption": get_data(sql_consumption),
        "capacity": get_data(sql_capacity)
    } 
    return jsonify(data)  





if __name__ == "__main__":
    app.run(debug=True)

