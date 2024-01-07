import { IconButton, Menu, MenuItem } from '@thng/react'
import { Language as LanguageIcon } from '@mui/icons-material'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useTranslator } from 'hooks/useTranslator'

export const LanguageSelector = observer(() => {
	const translator = useTranslator()
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	return (
		<>
			<IconButton
				color='secondary'
				size='small'
				onClick={(e) => setAnchorEl(e.currentTarget)}
			>
				<LanguageIcon color='secondary' />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClose={() => setAnchorEl(null)}
			>
				<MenuItem
					onClick={() => {
						translator.setLocale('fi-FI')
						setAnchorEl(null)
					}}
				>
					Suomi
				</MenuItem>
				<MenuItem
					onClick={() => {
						translator.setLocale('en-US')
						setAnchorEl(null)
					}}
				>
					English
				</MenuItem>
			</Menu>
		</>
	)
})
