const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Sidney Borrego y Diaz',
  authorAddress: 'sidney@oblcc.com',
  cdkVersion: '1.127.0',
  cdkVersionPinning: true,
  projenVersion: '0.29.17',
  name: '@platform/secure-bucket',
  repositoryUrl: 'https://github.com/sborregodiaz/clubcloud-construct',
  defaultReleaseBranch: 'main',
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-kms',
    '@aws-cdk/aws-s3',
  ],
  devDeps: [
    'ts-node',
    '@jest/globals',
  ],
  python: {
    distName: 'platform-secure-bucket',
    module: 'platform-secure-bucket',
  },
  npmRegistryUrl: 'https://clubcloud-domain-<DOMAIN_ACCOUNT_ID>.d.codeartifact.<REGION>.amazonaws.com/npm/clubcloud-npm-platform-constructs/',
  // GitHub configuration
  buildWorkflow: false,
  dependabot: false,
  mergify: false,
  pullRequestTemplate: false,
  releaseWorkflow: true,
  tsconfig: {
    compilerOptions: {
      lib: ['es2019', 'dom'], // 251021: Many Projen upgrades broke over night due to TS2304: Cannot find name 'AbortSignal'. Turns out it's a DefinitelyTyped bug.  They're working on it. https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56713/files
    },
  },
});

project.synth();