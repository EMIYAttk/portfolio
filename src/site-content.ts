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
  tagline: "AI 应用开发 · 智能体工程师",
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
  {
    title: "工业多智能体辅助设计",
    desc: "CrewAI 多智能体 + LoRA 微调 CAD 代码生成，vLLM 本地部署，省级双创项目结题。",
    url: "",
    badge: "省级双创",
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
  summary: `在某企业 AI 中台团队参与 RAG 知识库链路建设，工作覆盖后端契约适配与复杂 PDF 解析分块优化两条线。
面试中可重点围绕：为什么需要适配层、如何保证入库幂等、复杂 PDF 如何提升 RAG 召回质量等问题展开。`,
};

/** 实习页 — 各段实习详情（已脱敏，不含公司内部技术细节） */
export const internships = [
  {
    title: "RAG 后端适配服务",
    subtitle: "AI 中台团队 · 后端工程方向",
    techStack: ["FastAPI", "Python", "RAG", "REST API"],
    scenario:
      "上层问答、知识编译与编排模块需要统一的 RAG 检索与文档入库接口，但底层知识库引擎接口格式各异，且连接配置不宜由每次业务请求携带。",
    approach:
      "设计并实现契约适配服务：对上游暴露标准化检索与索引请求/响应格式，在适配层完成参数映射、结果转换与异常归一；连接与鉴权由服务进程统一管理。",
    contributions: [
      "实现语义检索、按片段精确回查、文档入库/删除等核心能力，检索结果附带置信度与引用信息",
      "构建文档入库闭环（上传 → 解析 → 状态轮询 → 片段登记），支持幂等入库避免重复写入",
      "引入运行时日志与审计链路，便于联调追踪与知识库变更追溯",
    ],
  },
  {
    title: "复杂 PDF 解析与语义分块优化",
    subtitle: "知识库文档工程方向",
    techStack: ["RAG", "PDF 解析", "语义分块", "OCR 增强"],
    scenario:
      "工程投标手册、技术规范等 PDF 版式复杂：图文混排、表格内嵌扫描图、安全标签与正文同行排列。默认粗合并分块导致检索片段语义边界模糊，章节上下文丢失。",
    approach:
      "在现有 RAG 文档解析链路上分层优化：解析阶段改善图文块融合与空图文字补全；分块阶段引入基于标题层级的语义切分，为每个片段注入章节路径；按知识库粒度提供可配置开关。",
    contributions: [
      "将已验证的 PDF 解析增强能力接入 RAG 平台，支持复杂版式文档结构化提取",
      "落地语义分块方案，chunk 携带章节面包屑，图表独立成块，检索时可定位具体章节",
      "针对表格内嵌图、整页扫描件增加可选 OCR 增强，使图片区域变为可搜索文本",
      "支持按知识库配置分块策略与噪声过滤，工程类与医学类文档可差异化调优",
      "持续推进医学口腔等装饰图较多文档场景的评测与优化",
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
  "CrewAI",
  "RAG 检索增强",
  "Prompt 工程",
  "Agent 编排",
  "工具调用",
  "LoRA 微调",
  "vLLM",
  "FastAPI",
  "Python",
  "ChromaDB",
  "Docker",
  "Git",
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
  {
    title: "工业多智能体辅助设计软件",
    desc: `省级双创项目负责人。CrewAI 多智能体协同 + 自建 NL→CAD 数据集 LoRA 微调 Qwen2.5-Coder；
vLLM 本地部署推理提速 40%+；FastAPI + Three.js 全链路 Demo（输入→3D 预览→下载）。`,
    url: "",
    badge: "省级结题",
    tags: ["CrewAI", "vLLM", "LoRA"],
  },
];

/** 首页数据亮点 */
export const highlights = [
  { value: "985", label: "东北大学" },
  { value: "551", label: "CET-6" },
  { value: "国一", label: "机器人 AI 大赛" },
  { value: "省级", label: "双创结题" },
];
