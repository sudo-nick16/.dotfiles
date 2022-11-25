local status_ok, _ = pcall(require, "lspconfig")
if not status_ok then
  return
end

require "sudonick.lsp.configs"
require("sudonick.lsp.handlers").setup()
require "sudonick.lsp.null-ls"
