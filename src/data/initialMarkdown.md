# Sample Markdown Document

## Headers

# H1 Header

## H2 Header

### H3 Header

#### H4 Header

##### H5 Header

###### H6 Header

---

## Text Formatting

**Bold text**

_Italic text_

**_Bold and italic_**

~~Strikethrough text~~

`Inline code` with backticks

---

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
    - Deep nested item 2.2.1
    - Deep nested item 2.2.2
- Item 3

### Ordered List

1. First item
2. Second item
   1. Nested numbered item
   2. Another nested item
      1. Deep nested numbered item
3. Third item

### Tasks List

- [x] Completed task
- [ ] Incomplete task
- [x] Another completed task
  - [ ] Nested incomplete task
  - [x] Nested completed task

---

## Tables

### Simple Table

| Column 1     | Column 2     | Column 3     |
| ------------ | ------------ | ------------ |
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left text    |  Center text   |    Right text |
| More left    |  More center   |    More right |

### Complex Table

| Feature        | Status         | Priority | Notes                 |
| -------------- | -------------- | -------- | --------------------- |
| Authentication | ✅ Complete    | High     | OAuth 2.0 implemented |
| Database       | 🔄 In Progress | High     | Migration pending     |
| UI/UX          | ❌ Not Started | Medium   | Wireframes ready      |
| Testing        | 🔄 In Progress | High     | 70% coverage          |

---

## Code Blocks

### Inline Code

Use `console.log()` to debug JavaScript.

### Fenced Code Block

```
// JavaScript example
function calculateSum(a, b) {
    return a + b;
}

const result = calculateSum(5, 3);
console.log(`The result is: ${result}`);
```

---

## Links

[Basic link](https://example.com)

[Link with tooltip](https://example.com "Example Website")

[Relative link to another page](./another-page.md)

Auto-link: https://www.example.com

Email: <email@example.com>

---

## Images

### Normal Image

![Alt text](https://placehold.co/400 "Image Title")

### Image as Link

[![Image as link](https://placehold.co/400)](https://example.com)

---

## Blockquotes

### Simple Blockquote

> This is a simple blockquote.

### Multi-line Blockquote

> This is a multi-line blockquote.
> It spans multiple lines and maintains
> the quote formatting throughout.

### Complex Blockquote with Header

> ### Header
>
> You can include other markdown elements:
>
> - Lists
> - **Bold text**
> - `Code`
>
> > Nested blockquotes are also possible.
> >
> > > Even deeply nested ones.

---

## HTML Elements

<div align="center">
  <h3>HTML in Markdown</h3>
  <p>You can use <strong>HTML tags</strong> directly in markdown.</p>
</div>

<details>
<summary>Click to expand</summary>

This content is hidden by default and can be expanded by clicking the summary.

```
console.log("Hidden code block");
```

</details>
