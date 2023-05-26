import { MockMethod } from "vite-plugin-mock";

const data = [
  {
    id: 1,
    title: "病理性语音信号的分类研究",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "张同学",
    studentNo: "19051101",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 2,
    title: "基于文本语义的可视化方法建模及系统设计",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051102",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 3,
    title: "基于脑电EEG信号的睡眠分期识别方法研究",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051103",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 4,
    title: "基于深度学习模型的语音情绪识别设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 5,
    title: "基于EEG信号的视频偏好评价方法研究",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 1,
    student: "王同学",
    studentNo: "19051105",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 6,
    title: "EEG信号采集系统软件平台设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "李同学",
    studentNo: "19051106",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 7,
    title: "基于springboot和vue开发大学生体育测试管理系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051107",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 8,
    title: "基于Spring与Vue的在线聊天室的设计与开发",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 9,
    title: "基于Golang的课室多媒体设备报障系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "张同学",
    studentNo: "19051109",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 10,
    title: "基于微信小程序开发大学生体育课后锻炼系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051110",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 11,
    title: "基于springboot的在线社区供销系统设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051201",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 12,
    title: "基于SpringBoot的人才培养系统设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 13,
    title: "基于协同过滤算法的游戏虚拟物品交易平台的设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "王同学",
    studentNo: "19051203",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 14,
    title: "儿童托管管理系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "李同学",
    studentNo: "19051204",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 15,
    title: "基于MQTT的智能家居系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051205",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 16,
    title: "基于ARM的嵌入式实验系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "孙同学",
    studentNo: "19051206",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 17,
    title: "基于边缘计算的相片手绘化设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 18,
    title: "基于深度学习的车牌识别与管理系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051208",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 19,
    title: "基于双目立体视觉的机动车车距监测的设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051209",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 20,
    title: "基于linux的嵌入式音视频智能监控系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "钱同学",
    studentNo: "19051210",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 21,
    title: "基于图像分割的视频会议场景构建软件设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 2,
    createTime: 1609840000000
  },
  {
    id: 22,
    title: "基于声音评价的语言学习辅助系统设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "李同学",
    studentNo: "19051302",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 23,
    title: "3D思维导图编辑系统的设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051303",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 24,
    title: "基于Vue和nodejs的全栈跨境贸易系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "孙同学",
    studentNo: "19051304",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 25,
    title: "基于node.js的在线练题应用的设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 1,
    student: "张同学",
    studentNo: "19051305",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 26,
    title: "基于echarts的就业信息可视化站点的设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 0,
    createTime: 1609840000000
  },
  {
    id: 27,
    title: "基于视觉分析的多种类交通违法行为识别管理系统的设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051307",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 28,
    title: "基于移动端的非遗传承平台的设计与实现",
    type: 3,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "钱同学",
    studentNo: "19051308",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 29,
    title: "基于Docker Compose的持续集成部署平台的设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "王同学",
    studentNo: "19051309",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 30,
    title: "弱监督下医学图像数据增强方法的设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "李同学",
    studentNo: "19051310",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 31,
    title: "室内复杂场景3D点云构建方法的设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051401",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 32,
    title: "基于可移动相机视频目标识别及测距系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 1,
    student: "孙同学",
    studentNo: "19051402",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 33,
    title: "基于ROS的智能小车室内目标识别及导航系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 2,
    createTime: 1609840000000
  },
  {
    id: 34,
    title: "基于树莓派的智能小车障碍物识别及定位技术设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051404",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 35,
    title: "基于仿生式算法的小车路径规划算法设计与实现",
    type: 3,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051405",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 36,
    title: "四旋翼无人机运动学建模及仿真设计与实现",
    type: 3,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "钱同学",
    studentNo: "19051406",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 37,
    title: "基于视觉的无人机障碍物识别方法研究与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "王同学",
    studentNo: "19051407",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 38,
    title: "基准测试数据的采集、分析与可视化系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "李同学",
    studentNo: "19051408",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 39,
    title: "测试覆盖率数据的采集、分析与可视化系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051409",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 40,
    title: "开源社区求助任务的采集、分析与可视化系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 1,
    student: "孙同学",
    studentNo: "19051410",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 41,
    title: "开源软件开发流程数据的采集、分析与可视化系统设计与实现",
    type: 3,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 42,
    title: "开源社区wontfix任务的采集、分析与可视化系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051502",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 43,
    title: "Steam游戏用户评论数据的采集、分析与可视化系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "赵同学",
    studentNo: "19051503",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 44,
    title: "Metacritic游戏专业评价数据的采集、分析与可视化系设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "王老师",
    total: 1,
    selected: 1,
    student: "钱同学",
    studentNo: "19051504",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 45,
    title: "Steam游戏更新日志的采集、分析与可视化系统设计与实现",
    type: 1,
    introduce: "这是课题的简介",
    teacher: "李老师",
    total: 1,
    selected: 1,
    student: "王同学",
    studentNo: "19051505",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 46,
    title: "基于JAVA的花卉识别系统的设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "陈老师",
    total: 1,
    selected: 0,
    student: "",
    studentNo: "",
    status: 2,
    createTime: 1609840000000
  },
  {
    id: 47,
    title: "赋能共享充电宝商业拓展的CRM系统设计与实现",
    type: 3,
    introduce: "这是课题的简介",
    teacher: "赵老师",
    total: 1,
    selected: 1,
    student: "郑同学",
    studentNo: "19051507",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 48,
    title: "基于深度学习的视频人像分割软件系统设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "孙老师",
    total: 1,
    selected: 1,
    student: "孙同学",
    studentNo: "19051508",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 49,
    title: "城市道路交通信号灯调度系统设计与实现",
    type: 2,
    introduce: "这是课题的简介",
    teacher: "郑老师",
    total: 1,
    selected: 1,
    student: "张同学",
    studentNo: "19051509",
    status: 1,
    createTime: 1609840000000
  },
  {
    id: 50,
    title: "算法调用服务化系统的设计与实现",
    type: 0,
    introduce: "这是课题的简介",
    teacher: "刘老师",
    total: 1,
    selected: 1,
    student: "刘同学",
    studentNo: "19051510",
    status: 1,
    createTime: 1609840000000
  }
];

export default [
  {
    url: "/admin/getAuditList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: data.filter(item => item.status === 0)
      };
    }
  },
  {
    url: "/admin/getTopicList",
    method: "post",
    response: () => {
      return {
        success: true,
        data: data
      };
    }
  }
] as MockMethod[];
