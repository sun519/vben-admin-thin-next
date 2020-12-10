import Mock from 'mockjs';

const Vpc = Mock.mock({
    // 创建vpc
    accountId: '45cec96b-3431-11ea-9b23-0242ac14eecb',
    region: {
        cloudType: 'Ali',
        regionId: 'cn-hangzhou',
    },
    vpcName: 'xingkai',
    cidrBlock: '172.16.0.0/12',
});

export { Vpc };
