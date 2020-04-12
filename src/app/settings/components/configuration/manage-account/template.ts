export const template = {
  'AWSTemplateFormatVersion': '2010-09-09',
  'Description': 'This template creates a cross account role needed for Cops.',
  'Outputs': {
    'RoleARN': {
      'Description': 'The ARN of the role that can be assumed by the other account.',
      'Value': {
        'Fn::GetAtt': ['CopsRole', 'Arn']
      }
    }
  },
  'Parameters': {
    'ExternalID': {
      'Description': 'The External ID that will be required to assume the role.',
      'MinLength': '1',
      'Type': 'String',
      'Default': ''
    }
  },
  'Resources': {
    'CopsRole': {
      'Properties': {
        'RoleName': 'CopsIntegrationRole',
        'ManagedPolicyArns': ['arn:aws:iam::aws:policy/ReadOnlyAccess'],
        'AssumeRolePolicyDocument': {
          'Statement': [{
            'Action': 'sts:AssumeRole',
            'Condition': {
              'StringEquals': {
                'sts:ExternalId': {
                  'Ref': 'ExternalID'
                }
              }
            },
            'Effect': 'Allow',
            'Principal': {
              'AWS': {
                'Fn::Join': ['', ['arn:aws:iam::', '854293248838', ':root']]
              }
            },
            'Sid': 'ManagedReadOnlyAccessV1'
          }],
          'Version': '2012-10-17'
        },
        'Path': '/',
        'Policies': [{
          'PolicyDocument': {
            'Statement': [{
              'Sid': 'LoadBalancerV1',
              'Action': ['elasticloadbalancing:AddTags', 'elasticloadbalancing:DeleteLoadBalancer', 'elasticloadbalancing:Describe*', 'elasticloadbalancing:RemoveTags'],
              'Effect': 'Allow',
              'Resource': '*'
            }, {
              'Sid': 'EC2V1',
              'Action': ['ec2:CreateTags', 'ec2:DeleteSnapshot', 'ec2:DeleteTags', 'ec2:DeleteVolume', 'ec2:Describe*', 'ec2:StartInstances', 'ec2:StopInstances'],
              'Effect': 'Allow',
              'Resource': '*'
            },
			{
			  'Effect': 'Allow',
			  'Action': 'ce:*',
			  'Resource': '*'
			}],
            'Version': '2012-10-17'
          },
          'PolicyName': 'COpSCustomPolicy'
        }]
      },
      'Type': 'AWS::IAM::Role'
    }
  }
}