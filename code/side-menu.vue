<!--
实现一个VueJS组件，用于渲染动态可展开的类似侧边菜单的项目列表。

组件的最外层标签是一个带有 menu-wrapper 类的 div。最初它将不包含任何内容，您的任务是创建代码，在其中显示侧边菜单。
该组件将接收一个名为 menuConfig 的属性，其中包含侧边菜单数据的配置。
这将是一个对象数组，包含 title（字符串）和可选的 subItems（字符串数组）。
menuConfig 的示例可能如下所示：

[ { title: "Home", }, { title: "Services", subItems: ["Cooking", "Cleaning"] } ]

每个菜单项都应该显示在各自对应的 div 内。
这个 div 应该有一个动态创建的属性 data-testid，格式为：first-level-{lowercase-title-name-here}。例如，如果 menuConfig 中的某个项目包含标题 Home，则 div 应该有一个包含 first-level-home 的 data-testid。
上一点中的每个 div 应该包含以下内容：
○ title。例如，对于标题为 Home 的项目，文本 Home 应该出现在这个 div 中。
○ 带有动态 data-testid 的 button，格式为：button-{lowercase-title-name-here}（例如，button-home）。
只有当给定菜单项有子项目时（非空 subItems 数组），才应显示按钮。点击按钮时，如果菜单是隐藏的，则子菜单（下一点中描述的 ul 列表）应该出现；
如果菜单已经展开，则应该移除。当给定菜单未展开时，按钮内的文本应为 Expand，如果菜单已经展开，则为 Hide。
○ ul 列表。ul 标签应该有一个 data-testid，格式为：ul-{lowercase-title-name-here}，所以如果我们有一个 Home 标题的列表，data-testid 应该是 ul-home。
■ 上述 ul 标签内的 li 标签。每个 li 应该有一个 data-testid，格式为：li-{lowercase-title-name-here}-{lowercase-subitem-name-here}。
例如，对于 Home 标题和子项 Main 和 Services，li 的 data-testid 应该是 li-home-main 和 li-home-services。每个 li 标签内应该有一个子项名称（从数组 subItems 中获取）。这些子菜单列表的显示状态由上述对应的按钮控制。
任何时候只能有一个子菜单处于展开状态。如果一个子菜单是打开的，然后点击了其他菜单项按钮，之前展开的子菜单应该隐藏，新的子菜单应该出现。
测试将通过 data-testid 跟踪元素，所以不可见的元素不应该被渲染。不要使用CSS属性控制元素的可见性。
-->


<template>
  <div class="menu-wrapper">
    <div
        v-for="item in menuConfig"
        :key="item.title"
        :data-testid="`first-level-${item.title.toLowerCase()}`"
    >
      <div>
        <title>{{ item.title }}</title>
        <button
            :data-testid="`button-${item.title.toLowerCase()}`"
            @click="toggleSubmenu(item.title)"
        >
          {{ item.title }}
          <span v-if="hasSubItems(item)">{{ isExpanded(item.title) ? 'Hide' : 'Expand' }}</span>
        </button>
      </div>

      <ul
          v-if="hasSubItems(item)"
          :data-testid="`ul-${item.title.toLowerCase()}`"
          v-show="isExpanded(item.title)"
      >
        <li
            v-for="subItem in item.subItems"
            :key="subItem"
            :data-testid="`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`"
        >
          {{ subItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  props: {
    menuConfig: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expanded: null
    };
  },
  methods: {
    hasSubItems(item) {
      return item.subItems && item.subItems.length > 0;
    },
    isExpanded(title) {
      return this.expanded === title;
    },
    toggleSubmenu(title) {
      if (this.expanded === title) {
        // 如果已经展开，则收起
        this.expanded = null;
      } else {
        // 否则展开此菜单（并收起其他任何已展开的菜单）
        this.expanded = title;
      }
    }
  }
};
</script>
