<template>
  <div class="exam-info">
    <div class="paper">
      <el-skeleton :rows="5" animated :loading="loading">
        <div
          class="question"
          v-for="(question, index) in questions"
          :key="question.id"
        >
          <div>
            <div class="title">{{ index + 1 }}. {{ question.question }}</div>
            <el-radio-group v-model="question.selectedAnswer" class="options">
              <div
                class="option"
                v-for="(option, optionIndex) in question.options"
                :key="optionIndex"
              >
                <el-radio :label="option">{{ option }}</el-radio>
              </div>
            </el-radio-group>
          </div>
        </div>
        <div class="submit">
          <el-button type="primary" @click="">提交</el-button>
          <!-- <div v-if="showScore" class="score">得分：{{ score }}</div> -->
        </div>
      </el-skeleton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";

interface Question {
  id: string;
  type: number;
  question: string;
  options: string[];
  answer: string[];
  selectedAnswer: null;
  score: number;
  difficulty: number;
}

export default defineComponent({
  setup() {
    const questions = ref<Question[]>([]);
    const loading = ref(true);
    const activeName = ref("first");
    const title = ref("");

    onMounted(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        loading.value = false;
      }, 500);

      axios
        .get("/api/question/exam/1")
        .then((response) => {
          questions.value = response.data.data.map((record: any) => {
            return {
              id: record.id,
              type: record.type,
              question: record.content,
              options: JSON.parse(record.options),
              answer: JSON.parse(record.answer),
              selectedAnswer: null,
              score: record.score,
              difficulty: record.difficulty,
            };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });

    return {
      questions,
      loading,
      activeName,
      title,
    };
  },
});
</script>

<style lang="less" scoped>
/* Recommendations 样式 */

.exam-info {
  border-radius: 25px;

  .paper {
    display: flex;
    padding: 100px;
    margin-top: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    .question {
      margin-bottom: 20px;
      .title {
        display: flex;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .options {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        .option {
          display: flex;
          margin-bottom: 10px;
          padding: 10px;
        }
        .option:hover {
          background-color: #f7f8f8;
          border-radius: 5px;
        }
        .option:checked {
          background-color: aqua !important;
        }
      }
    }
  }
}
.el-radio-group {
  align-items: normal;
  display: inline-block;
  width: 100%;
  height: 100%;
}

/* 选中的标签 */
:deep(.el-radio__input.is-checked + .el-radio__label) {
  color: #32ca99;
}
:deep(.el-radio__input.is-checked .el-radio__inner) {
  border-color: #32ca99;
  background: #32ca99;
}

.el-button {
  background: #32ca99;
  border-color: #32ca99;
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  &:hover {
    background-color: #2db78b;
    border-color: #2db78b;
  }
}
</style>
