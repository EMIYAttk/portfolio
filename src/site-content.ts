/**
 * ============================================================
 *  个人网站内容配置文件 —— 改内容优先改这个文件
 * ============================================================
 *  详细说明见项目根目录：内容修改指南.md
 */

/** 网站基础信息（也同步改 src/config.ts 里的 SEO 标题） */
export const site = {
  title: "成程 · AI 应用开发",
  description:
    "东北大学计算机专业 · 专注大模型应用、RAG 检索增强与多智能体编排 · 求职 AI 应用开发 / 智能体方向",
  url: "https://EMIYAttk.github.io/portfolio",
};

/** 个人简介（首页 Hero + 侧边栏 + CV 页） */
export const profile = {
  greeting: "你好 👋",
  name: "成程",
  tagline: "AI 应用开发 · 智能体方向",
  bio: `东北大学计算机科学与技术专业在读，专注大模型应用、RAG 检索增强与多智能体编排。
具备从方案设计、后端开发到快速原型验证的完整工程能力，求职 AI 应用开发 / 智能体开发方向实习生。`,
  github: "https://github.com/EMIYAttk",
  email: "",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/EMIYAttk", icon: "github" as const },
];

/** 首页「精选项目」 */
export const featuredProjects = [
  {
    title: "企业级智能工单助手",
    desc: "两阶段 Agent 流水线 + RAG 知识库 + 飞书集成，故障响应从 15 分钟降至 30 秒内。",
    url: "https://github.com/EMIYAttk/Intelligent_work_order_Agent",
    badge: "开源",
  },
  {
    title: "渐进式 Agent Skills 智能体",
    desc: "按需加载技能架构，15 技能场景初始 token 降低 90%+，工具调用准确率提升约 20%。",
    url: "https://github.com/EMIYAttk/my-llm_projectB",
    badge: "架构",
  },

];

/** CV 页 — 教育背景 */
export const education = [
  {
    title: "东北大学 · 计算机科学与技术（985 / 双一流）",
    subtitle: "2023.09 — 至今 · 计算机与通信工程学院",
    detail: "CET-6 551 · 全国大学生英语竞赛三等奖",
  },
];

/** 实习页 — 页面顶部导语 */
export const internshipIntro = {
  title: "企业实习经历",
  summary: `在研究院 AI 中台团队参与 RAG 知识库链路建设，覆盖后端契约适配与复杂 PDF 解析分块优化两条并行工作线。
核心价值在于：为上层 AI 应用（智能问答、知识编译、辅助写作等）提供稳定、高质量的知识检索与文档入库能力。`,
};

/** 实习页 — 各段实习详情 */
export const internships = [
  {
    title: "RAG 知识库链路建设",
    subtitle: "北京大学（天津滨海）新一代信息技术研究院 · AI 中台团队",
    techStack: ["FastAPI", "MinerU", "RAG", "PDF 解析", "语义分块", "OCR 增强"],
    scenario:
      "上层 AI 应用（智能问答、知识编译、辅助写作等）需要统一的 RAG 检索与文档入库能力，但底层知识库引擎接口各异；且上游输入的 PDF 文档版式复杂（图文混排、表格内嵌扫描图等）、场景多样（工业使用手册，招投标合同书、口腔医学教材等），默认粗合并分块导致检索片段语义边界模糊，章节上下文丢失，检索效果不佳。",
    approach:
      "并行推进两条工作线：1）设计契约适配层，对上游暴露标准化接口，屏蔽底层引擎差异；2）在文档解析链路中优化 PDF 结构化提取与语义分块策略，让检索片段携带完整的章节上下文。两条线共同服务于上层 AI 应用的知识调用需求。",
    contributions: [
      "设计并实现 RAG 契约适配服务：统一检索/入库接口，完成参数映射与异常归一，让上层 AI 应用无需感知底层引擎差异，专注业务逻辑开发",
      "构建文档入库闭环（上传→解析→状态轮询→片段登记），支持幂等入库，避免重复写入导致的知识库污染",
      "落地基于标题层级的语义分块方案，chunk 携带章节面包屑，检索时可定位到具体章节，提升问答应用的回答准确性",
      "基于开源框架 MinerU 针对复杂 PDF（表格内嵌图、整页扫描件）增加可选 OCR 增强与解析结果后处理清洗，使图片区域内容可被检索召回，提升入库文档整体的语义检索质量",
      "引入运行时日志与审计链路，便于联调追踪与知识库变更追溯，降低 AI 应用调试门槛",
      "支持按知识库配置分块策略与噪声过滤，使 RAG 能力可适配工程文档、医学文档等不同场景",
    ],
  },
];

/** CV 页 — 竞赛经历 */
export const competitions = [
  {
    title: "中国机器人及人工智能大赛 · 国家级一等奖",
    subtitle: "ROS 无人车视觉自主射击 · 2025.8",
    detail: "负责语音唤醒、射击点输入等功能模块开发与参数调优，助力团队获得国赛冠军。",
  },
  {
    title: "无人车视觉巡航 · 省级三等奖",
    subtitle: "2025.8",
    detail: "设计轻量化视觉识别与导航融合方案，解决多任务点导航与目标检测问题。",
  },
];

/** CV 页 — 技能列表 */
export const skills = [
  "LangChain / LangGraph",
  "CrewAI多智能体角色编排与任务分解",
  "RAG 检索增强",
  "Prompt 工程",
  "Agent 编排",
  "Function Calling",
  "LoRA 微调",
  "vLLM",
  "FastAPI",
  "ChromaDB",
  "Docker",
  "Linux",
  "MySQL",
  "Three.js",
];

/** 项目页 — 全部项目 */
export const allProjects = [
  {
    title: "企业级智能工单助手",
    desc: `面向 IT 运维场景，设计两阶段 Agent 流水线解决工具调用与结构化输出冲突；
基于 ChromaDB + BGE 构建四类故障 RAG 知识库（检索准确率 85%+）；
接入飞书 WebSocket 群聊 @ 消息，返回交互式卡片工单。`,
    url: "https://github.com/EMIYAttk/Intelligent_work_order_Agent",
    badge: "LangChain",
    tags: ["RAG", "FastAPI", "飞书"],
  },
  {
    title: "渐进式 Agent Skills 智能体",
    desc: `针对上下文窗口限制与多领域决策混乱，实现仅暴露 load_skill 的渐进式技能加载架构；
15 个长文本技能场景下初始 token 从 68k 降至 2.8k，首次响应提速 30%+。`,
    url: "https://github.com/EMIYAttk/my-llm_projectB",
    badge: "Skill 架构",
    tags: ["Agent", "MCP"],
  },

];

/** 首页数据亮点 */
export const highlights = [
  { value: "985", label: "东北大学" },
  { value: "551", label: "CET-6" },
  { value: "国家一等奖", label: "中国机器人及人工智能大赛" },

];
