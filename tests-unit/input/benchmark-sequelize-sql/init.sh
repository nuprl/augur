#!/bin/sh

# This script will install postgresql, initialize it, run the service,
# create new database, connect to the newly created db and run SQL script init_queries.sql

# The SQL script creates a new database sueperuser role that will be used for login in our
# benchmark. Then it creates a simple table.

# The service is stopped after all this, it will be started again when it's needed

# First check whether PostgreSQL is available on your system and install it from brew if not
if which -s psql; then
	# don't install pgsql
	echo "psql already instaled - skipping installation..."
else
	# install pgsql
	brew install postgresql
fi

# Init the database
initdb ./postgres

# Create new user for database access
#createuser -P tester

# Start the service
pg_ctl -D ./postgres -l logfile start

# Sleep for few seconds and let the service start
sleep 3

# Create new dabatase
createdb test

# Run psql
psql -d test -U $USER -a -f init_queries.sql

# Stop the service
pg_ctl -D ./postgres stop 
