# clubcloud-construct
This repository contains the code required to set up your first hello-world CDK construct pipeline, as demonstrated in the Club Cloud "WORKSHOP: ACCELERATE YOUR CLOUD ADOPTION WITH THE AWS CLOUD DEVELOPMENT KIT" session on November 1st 2021 at https://clubcloud.world.

This repository is second in a set of 3 Github repositories that are required to provision the end-to-end chain:
1. https://github.com/sborregodiaz/clubcloud-construct-pipeline
2. https://github.com/sborregodiaz/clubcloud-construct
3. https://github.com/sborregodiaz/clubcloud-construct-consumer

The part highlighted in green on the diagram below is the focus of this repository  

![Architecture diagram](assets/1.png "Architecture diagram")

## Instructions
0. Install [git-remote-codecommit](https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-git-remote-codecommit.html#setting-up-git-remote-codecommit-prereq)
1. Clone this repository
2. Replace the values of `<DOMAIN_ACCOUNT_ID>` and `<REGION>` in .projenrc
3. Run `npx projen build`
4. Run `git remote add codecommit codecommit::<REGION>://clubcloud-secure-bucket-construct`
5. Run `git add .`
6. Run `git commit -m "Initial commit"`
7. Run `git push codecommit master`
8. Proceed with https://github.com/sborregodiaz/clubcloud-construct-consumer

## Useful links
* [CDK](https://github.com/aws/aws-cdk)
* [Projen](https://github.com/projen/projen)
* [CDK Workshop](https://cdkworkshop.com/)
* [CDK Advanced Workshop](https://cdk-advanced.workshop.aws/start.html)
* [AWS Solutions Constructs – A Library of Architecture Patterns for the AWS CDK](https://aws.amazon.com/blogs/aws/aws-solutions-constructs-a-library-of-architecture-patterns-for-the-aws-cdk/)
* [Pahud Hsieh GitHub](https://github.com/pahud)
* [ConstructHub](https://constructs.dev/)

## Technical README
This Secure Bucket construcs extends the S3 Bucket construct. When using this construct, you will create a S3 bucket with default security best practises enabled. These are:

- Block public access
- Enabled versioning
- Enable enforce SSL to connect to bucket
- Enabled Bucket access logging
- Encryption of the bucket with a customer managed KMS key with enabled key rotation and trusted account identities.

These best practises are enforced. When creating a SecureBucket with for example versioning disabled, it will be overwritten to enabled.

### install package
```bash
npm install @platform/secure-bucket
```


### Import the secure bucket construct in your code.

```typescript
import cdk = require('@aws-cdk/core');
import { SecureBucket } from '@platform/secure-bucket';

export class TestCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SecureBucket(this, 'mySecureBucket',{});
  }
}

```