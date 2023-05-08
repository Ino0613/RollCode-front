<template>
  <div class="i-calendar">
    <el-calendar ref="calendar" class-name="q-calendar">
      <template #header="{ date }">
        <span>每日一题</span>
        <span>{{ date }}</span>
      </template>
    </el-calendar>
  </div>
</template>

<style lang="less">
.i-calendar {
  .el-calendar {
    width: 300px;
    --el-calendar-border: transparent;
    border-radius: 20px;
    --el-calendar-cell-width: 35px !important;

    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);

    .el-calendar__body {
      padding: 10px 10px 35px;

      .el-calendar-day {
        border-radius: 20px;
      }
    }

    .current.is-selected {
      border-radius: 20px;
    }

    .current.is-selected.is-today {
      color: aliceblue;
      background-color: #47e2b1;
    }

    .el-calendar-table:not(.is-range) td.next {
      /*隐藏下个月的日期*/

      display: none;
    }

    .el-calendar-table:not(.is-range) td.prev {
      /*隐藏上个月的日期*/

      visibility: hidden;
    }

    thead {
      font-size: small;
    }
    .el-calendar-table .el-calendar-day:hover {
        cursor: pointer;
        background-color: transparent;
    }
    .el-calendar-table td.is-today {
        color: #47e2b1;
    }
  }


}
</style>
