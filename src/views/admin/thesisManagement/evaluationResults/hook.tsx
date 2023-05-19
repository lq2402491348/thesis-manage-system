import dayjs from "dayjs";
import { message } from "@/utils/message";
import { evaluationList } from "@/api/admin";
import { type PaginationProps, LoadingConfig } from "@pureadmin/table";
import { reactive, ref, onMounted } from "vue";
import { delay } from "@pureadmin/utils";

export interface Info {
  id?: number;
  name?: string;
  teacherName?: string;
  studentName?: string;
  studentNo?: string;
  status?: number;
  feedback?: string;
  createTime?: number;
}

export function useEvaluation() {
  const dataList = ref<Info[]>();
  const loading = ref(true);
  const loadingConfig = reactive<LoadingConfig>({
    text: "正在加载第1页...",
    viewBox: "-10, -10, 50, 50",
    spinner: `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
  });

  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      type: "selection",
      width: 50,
      align: "left",
      hide: ({ checkList }) => !checkList.includes("勾选列")
    },
    {
      label: "序号",
      type: "index",
      width: 70,
      hide: ({ checkList }) => !checkList.includes("序号列")
    },
    {
      label: "题目",
      prop: "name",
      minWidth: 150
    },
    {
      label: "指导教师",
      prop: "teacherName",
      minWidth: 100
    },
    {
      label: "学生姓名",
      prop: "studentName",
      minWidth: 100
    },
    {
      label: "学号",
      prop: "studentNo",
      minWidth: 100
    },
    {
      label: "状态",
      minWidth: 110,
      cellRenderer: scope => (
        <el-tag
          key={scope.row.id}
          type={["info", "", "success", "warning", "danger"][scope.row.status]}
          class="mx-1"
          effect="dark"
        >
          {
            ["未提交", "待审核", "审核通过", "打回修改", "挂起/退修"][
              scope.row.status
            ]
          }
        </el-tag>
      )
    },
    {
      label: "反馈",
      prop: "feedback",
      minWidth: 160
    },
    {
      label: "创建时间",
      minWidth: 160,
      prop: "createTime",
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 150,
      slot: "operation"
    }
  ];

  function handleUpdate(row) {
    console.log(row);
  }

  function handleDelete(row) {
    console.log(row);
  }

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    loadingConfig.text = `正在加载第${val}页...`;
    loading.value = true;
    delay(500).then(() => {
      loading.value = false;
    });
  }

  async function onSearch() {
    loading.value = true;
    await evaluationList()
      .then(res => {
        if (res.success) {
          dataList.value = res.data;
          pagination.total = res.data.length;
        } else {
          message(res.message, {
            type: "error"
          });
        }
      })
      .finally(() => {
        setTimeout(() => {
          loading.value = false;
        }, 500);
      });
  }

  onMounted(() => {
    onSearch();
  });

  return {
    loading,
    loadingConfig,
    columns,
    dataList,
    pagination,
    onSearch,
    handleUpdate,
    handleDelete,
    handleSizeChange,
    handleCurrentChange
  };
}
