# ProofNFT Marketplace

## Installation

### Configure the application
- Mongo db configuration: Register here: https://www.mongodb.com/cloud/atlas/register
	- Create a new database
	- Click on "connect" then "Connect application"
	- Copy the link and paste it in server/index.js in line 24 "const CONNECTION_URL"
	- Go to Mongo db - Network Access, and click on "add ip address"
	- Add the public ip address of the machine you will be deploying the app in

- Amazon S3 buckets configuration
	- follow this tutorial to create a new bucket :https://docs.aws.amazon.com/quickstarts/latest/s3backup/step-1-create-bucket.html
	- get the bucket name, id and secret
	- paste them in file server/controllers/upload.js lines 8,9 and 12

- Run the application
	- Server
		- `cd` into the Server directory and tape the command `npm i` then the command `npm start`
	- Client
		- `cd` into the Client directory and tape the command `npm i` then the command `npm start`

