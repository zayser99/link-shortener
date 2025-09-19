export const postData = async (originalUrl: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl }),
    });

    if (!response.ok) {
      if (response.status === 400) {
        let badRequestMessage = "Bad Request";
        try {
          const errorData = await response.json();
          badRequestMessage = errorData.message || badRequestMessage;
        } catch {
        }
        throw new Error(badRequestMessage);
      }

      let errorMessage = `Error ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error en postData:", error);

    return {
      success: false,
      message: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
