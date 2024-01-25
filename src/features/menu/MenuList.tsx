import { Box, Stack, Typography } from '@thng/react'
import { forwardRef } from 'react'
import { useTranslator } from 'hooks/useTranslator'
import { Translation } from 'translations/Translator'
import { observer } from 'mobx-react-lite'
import { MenuListItem } from './MenuListItem'
import { MenuItem } from './menuData'

type MenuListProps = {
	label?: Translation
	subLabel?: Translation
	items: MenuItem[]
}

export const MenuList = observer(
	forwardRef(
		(
			{ label, subLabel, items }: MenuListProps,
			ref: React.ForwardedRef<HTMLDivElement>
		) => {
			const { tr } = useTranslator()

			return (
				<Stack component='section' ref={ref} gap={0.5} sx={{ p: 1 }}>
					{label && (
						<Typography
							variant='h2'
							sx={{
								fontWeight: (theme) =>
									theme.typography.fontWeightMedium,
								fontSize: (theme) =>
									theme.typography.pxToRem(24),
							}}
						>
							{tr(label)}
						</Typography>
					)}
					{subLabel && (
						<Typography
							variant='h3'
							sx={{
								fontWeight: (theme) =>
									theme.typography.fontWeightMedium,
								fontSize: (theme) =>
									theme.typography.pxToRem(20),
							}}
						>
							{tr(subLabel)}
						</Typography>
					)}
					<Box
						component='ul'
						sx={{ m: 0, p: 0, listStyleType: 'none' }}
					>
						{items.map((item) => (
							<MenuListItem key={item.name} item={item} />
						))}
					</Box>
				</Stack>
			)
		}
	)
)
