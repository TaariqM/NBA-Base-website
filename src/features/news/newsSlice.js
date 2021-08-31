import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const setNews = createAsyncThunk("news/setNews", async () => {
  const news = await (
    await fetch(
      `https://livescore6.p.rapidapi.com/news/list?category=basketball`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "3d98240ac7mshf5e6e6224e0d6bdp1c5206jsn6514ac3f4eb6",
          "x-rapidapi-host": "livescore6.p.rapidapi.com",
        },
      }
    )
  ).json();

  if (news && news.arts && news.arts.length !== 0) {
    const results = news.arts.filter(
      (result) => result.tit.toLowerCase().indexOf("tokyo olympics") === -1
    );
    return results;
  }
});
export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
  },

  extraReducers: (builder) => {
    builder.addCase(setNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const {} = newsSlice.actions;
export default newsSlice.reducer;
