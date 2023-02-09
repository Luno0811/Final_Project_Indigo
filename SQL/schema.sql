-- Creating table for Vaccination data
CREATE TABLE vaccinations (
	record INT NOT NULL,
	date DATE NOT NULL,
	location VARCHAR(40) NOT NULL,
	total_vaccinations FLOAT,
	total_distributed FLOAT,
	people_vaccinated FLOAT,
	people_fully_vaxxed_per_hundred FLOAT,
	total_vaxxed_per_hundred FLOAT,
	people_fully_vaxxed FLOAT,
	people_vaxxed_per_hundred FLOAT,
	distributed_per_hundred FLOAT,
	daily_vaccinations_raw FLOAT,
	daily_vaccinations FLOAT,
	daily_vaccinations_per_million FLOAT,
	share_doses_used FLOAT,
	total_boosters FLOAT,
	total_boosters_per_hundred FLOAT,
	PRIMARY KEY (record)
);

-- Creating table for census data

CREATE TABLE census (
	state VARCHAR(40) NOT NULL,
	population_estimate_2019 INT NOT NULL,
	latitude FLOAT NOT NULL,
	longitude FLOAT NOT NULL,
	PRIMARY KEY (state)
);