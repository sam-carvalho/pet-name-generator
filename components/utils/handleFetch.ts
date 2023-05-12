const handleFetch = async (pet: string) => {
  try {
    const response = await fetch("/api/generate", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pet }),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }

    return data.result;
  } catch (error) {
    console.log(error);
    return "";
  }
};

export default handleFetch;
