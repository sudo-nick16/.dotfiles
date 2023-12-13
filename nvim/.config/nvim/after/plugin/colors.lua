function Configure_colors()
	vim.api.nvim_set_hl(0, "Normal", { bg = "none" })
	vim.api.nvim_set_hl(0, "NormalFloat", { bg = "none" })

    local hl = function(thing, opts)
        vim.api.nvim_set_hl(0, thing, opts)
    end

    hl("CursorLine", {
        bg = "none"
    })

    hl("SignColumn", {
        bg = "none",
    })

     -- hl("ColorColumn", {
     --     ctermbg = 0,
     -- })

     hl("CursorLineNR", {
         bg = "none"
     })

    hl("Normal", {
        bg = "none"
    })

end

Configure_colors()
