from app import engine
from config import db_key


rds_connection_string = f"postgres:{db_key}@localhost:5432/solar"
#engine = create_engine(f'postgresql://{rds_connection_string}')

# db.drop_all()
engine.create(f'postgresql://{rds_connection_string}')