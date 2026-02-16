const response = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({ username: "Vis_1"}),
    headers: {
        "Content-Type": "application/json",
    },
})