vim.g.copilot_no_tab_map = true
vim.api.nvim_set_keymap("i", "<C-a>", 'copilot#Accept("<CR>")', { silent = true, expr = true })

-- disable copilot.vim by default
vim.g.copilot_enabled = false
