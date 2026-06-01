//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
  type?: 'ai' | 'openclaw';
  clawGroupId?: string;
}

export const groups: Group[] = [
  {
    id: 'novel-workshop',
    name: '📖AI小说工坊·玄幻仙侠',
    description: '群消息关注度权重："user"的最新消息>其他成员最新消息>"user"的历史消息>其他成员历史消息>
角色说明：
- 深海·主笔：负责创作小说正文，按设定直接输出章节
- 千羽·审稿：审查人称错误、字数达标、番茄平台适配
- 月影·架构：把控世界观一致性、剧情连贯性、衔接验证
- 爆点·监制：检测爽点密度、钩子强度、平台算法优化

协作流程：用户下达「写第X章」指令 → 深海输出正文 → 千羽审稿 → 月影验情节 → 爆点检爽点密度 → 深海根据反馈修改（如需）',
    members: ['ai_deepseek', 'ai_qwen', 'ai_kimi', 'ai_doubao'],
    isGroupDiscussionMode: false
  }
];
