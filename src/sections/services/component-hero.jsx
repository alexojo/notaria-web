import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ComponentHero({ title, subtitle }) {

  return (
    <Box
      sx={{
        height: { md: 300 },
        py: { xs: 10, md: 10 },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
          'url(/assets/background/overlay_1.svg), url(/assets/images/about/hero.jpg)',
      }}
    >
      <Container component={MotionContainer}>
        <Box
          sx={{
            textAlign: {
              xs: 'center',
              md: 'center',
            },
          }}
        >

          <Stack spacing={2} display="inline-flex" direction="row" sx={{ color: 'common.white', mb: 3 }}>
            <TextAnimate text={title} />
          </Stack>

          {
            subtitle

            &&

            <m.div variants={varFade().inRight}>
              <Typography
                variant="body1 "
                sx={{
                  mt: 3,
                  color: 'grey.400',
                  fontWeight: 'fontWeightSemiBold',
                }}
              >
                {subtitle}
              </Typography>
            </m.div>

          }

        </Box>
      </Container>
    </Box>
  );
}

function TextAnimate({ text, variants, sx, ...other }) {
  return (
    <Box
      component={m.div}
      sx={{
        typography: 'h3',
        overflow: 'hidden',
        display: 'inline-flex',
        flexWrap: 'wrap',
        ...sx,
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span
          key={index}
          variants={variants || varFade().inUp}
          style={letter === ' ' ? { display: 'inline-block', width: '0.4em' } : undefined}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </m.span>
      ))}
    </Box>
  );
}


TextAnimate.propTypes = {
  sx: PropTypes.object,
  text: PropTypes.string,
  variants: PropTypes.object,
};
