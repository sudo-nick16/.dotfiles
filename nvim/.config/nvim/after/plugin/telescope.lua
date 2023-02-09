local builtin = require('telescope.builtin')

vim.keymap.set('n', '<leader>f', builtin.find_files, {})
vim.keymap.set('n', '<C-p>', builtin.git_files, {})
vim.keymap.set('n', '<leader>F', builtin.live_grep, {})
vim.keymap.set('n', '<leader>b', builtin.buffers, {})
vim.keymap.set('n', '<leader>h', builtin.help_tags, {})
--vim.keymap.set('n', '<leader>F', builtin.grep_string, {})

require("telescope").setup({
  defaults = {
 --   preview = false,
    path_display = {
        "smart"
    },
    file_ignore_patterns = {
        "node_modules"
    }
  },
})
