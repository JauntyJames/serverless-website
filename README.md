Building a dynamic serverless website on Oracle Cloud Infrastructure
====================================================================

![Site Architectre](/architecture.png)

### Services:

- OCI NoSQL Cloud Service
- OCI Functions (Fn)
- OCI API Gateway
- React.js
- OCI Object Storage
- OCI Image Registry

To deploy
---------

1. Create NoSQL Table
2. Create dynamic group and policy to allow Functions to access table
3. Create Functions Application
4. Deploy functions to OCI
5. Create API Gateway and deployment
6. Create public object storage bucket
7. Update api endpoint in React code
8. Build React app
9. Upload build files to object storage bucket
10. Access website from the index.html location
