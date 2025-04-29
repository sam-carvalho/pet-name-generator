type FetchResult = {
  data?: string;
  error?: string;
};

const handleFetch = async (pet: string): Promise<FetchResult> => {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pet }),
    });

    const json = await response.json();

    if (!response.ok) {
      return { error: "Oh, no! Something went wrong! :(" };
    }

    return { data: json.result };
  } catch (err: any) {
    return { error: "Oh, no! Something went wrong! :(" };
  }
};

export default handleFetch;
