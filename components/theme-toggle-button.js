import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.28 }}
      >
        <IconButton
          aria-label="Toggle theme"
          icon={useColorModeValue(
            <IconButton
              variant="ghost"
              colorScheme="linkedin"
              icon={<MoonIcon />}
            />,
            <IconButton
              variant="ghost"
              colorScheme="red"
              icon={<SunIcon />}
            />
          )}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
