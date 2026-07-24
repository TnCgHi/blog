import type { DisplaySettingsConfig } from "../types/displaySettingsConfig";

// 显示设置面板开关配置
// 集中管理设置面板中所有可切换项的开关
// 方便统一控制哪些设置项对用户可见
// 也方便进行调试预览效果

export const displaySettingsConfig: DisplaySettingsConfig = {
	// ── 外观 (Appearance) ──────────────────────────────────

	// 主题色选择器开关
	themeColorSwitchable: true,

	// 文章列表布局切换开关
	layoutSwitchable: true,

	// 卡片边框和阴影开关
	cardBorderSwitchable: true,

	// 卡片风格跟随主题色开关
	cardFollowThemeSwitchable: true,

	// ── 壁纸 (Wallpaper) ──────────────────────────────────

	// 壁纸模式切换开关
	wallpaperModeSwitchable: true,

	// 水波纹动画开关
	wavesSwitchable: true,

	// 渐变过渡效果开关
	gradientSwitchable: true,

	// 横幅标题显示开关
	bannerTitleSwitchable: true,

	// 壁纸轮播开关
	bannerCarouselSwitchable: true,

	// 方式1：总开关，控制所有透明设置项
	// overlaySwitchable: true,

	// 方式2：分项开关，分别控制每个设置项
	overlaySwitchable: {
		opacity: true,
		blur: true,
		cardOpacity: true,
	},

	// ── 特效 (Effects) ────────────────────────────────────

	// 樱花特效开关
	sakuraSwitchable: true,
};
