vim.g.mapleader = " "

vim.opt.mouse = ""
vim.opt.guicursor = ""

vim.opt.signcolumn = 'yes'

-- netrw
vim.g.netrw_banner = 0
vim.g.netrw_liststyle = 0

vim.g.smartindent = true
vim.opt.tabstop = 4
vim.opt.softtabstop = 4
vim.opt.shiftwidth = 4
vim.opt.relativenumber = true
vim.opt.smarttab = true
vim.opt.expandtab = false

vim.opt.clipboard = unnamedplus

vim.opt.termguicolors = false

vim.opt.hlsearch = false
vim.opt.incsearch = true

vim.opt.swapfile = false
vim.opt.backup = false
vim.opt.undodir = os.getenv("HOME") .. "/.nvim/undodir"
vim.opt.undofile = true

vim.opt.wrap = false

vim.opt.scrolloff = 8
vim.opt.isfname:append("@-@")

vim.opt.colorcolumn = "80"
