export {};

console.log("Practice Fetch API with TypeScript");

interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}

const tbody =
  document.querySelector<HTMLTableSectionElement>("#blog-data tbody");

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:8000/blogs");

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data: IBlog[] = await res.json();

    if (!tbody) {
      console.error("Không tìm thấy tbody");
      return;
    }

    tbody.innerHTML = "";

    if (data.length > 0) {
      data.forEach((blog: IBlog, index: number) => {
        tbody.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
             <td>
                <button class="delete-btn" data-id="${blog.id}">
                  Delete
              </button>
            </td>
          </tr>
        `;
      });
    }

    console.log(data);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu:", error);
  }
};

tbody?.addEventListener("click", async (e: Event) => {
  const target = e.target as HTMLElement;

  if (target && target.classList.contains("delete-btn")) {
    const id = target.getAttribute("data-id");

    if (!id) return;

    try {
      const res = await fetch(`http://localhost:8000/blogs/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Xóa thành công");
        fetchData();
      } else {
        alert("Xóa thất bại");
      }
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
    }
  }
});

fetchData();
