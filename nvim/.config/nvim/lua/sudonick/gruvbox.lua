local status_ok, gruvbox = pcall(require, "gruvbox")
if not status_ok then
  return
end

gruvbox.setup({
  transparent_mode = true,
  overrides = {
    CursorLine = {
      -- fg = "#000000",
        bg = "none"
    },
    SignColumn = {
        bg = "none",
    },
    ColorColumn = {
        ctermbg = 0,
        bg = "#555555",
    },

    CursorLineNR = {
        bg = "None"
    },

    Normal = {
        bg = "none"
    },

    LineNr = {
        fg = "#5eacd3"
    },

    netrwDir = {
        fg = "#5eacd3"
    },
  }
})
-- vim.cmd("colorscheme gruvbox")
