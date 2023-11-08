import type { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { ArrowRight, OrangeSlice } from '@phosphor-icons/react'

type CardLinkProps = {
  to: string
}

const CardLink: FC<CardLinkProps> = ({ to }) => (
  <Link
    to={to}
    className={classNames(
      'flex h-32 w-64 cursor-pointer flex-col overflow-hidden rounded-xl border-[2px] border-solid border-gray-400/25 shadow-md',
      'border-blue-200',
      'hover:border-blue-400/50 hover:shadow-lg',
      'group/card-link'
    )}
  >
    <div className="flex h-full w-full flex-col justify-between overflow-hidden bg-blue-200 transition-all duration-500">
      <div
        className={classNames(
          'flex h-12 w-12 px-6 py-1 transition-all duration-500',
          'group-hover/card-link:h-6 group-hover/card-link:w-6'
        )}
      >
        <OrangeSlice
          size="100%"
          className={classNames(
            'fill-blue-400/50 transition-all duration-500',
            'group-hover/card-link:rotate-90'
          )}
          weight="bold"
        />
      </div>
      <div
        className={classNames(
          'mt-auto flex flex-col px-6 py-2',
          'text-blue-400/75',
          'transition-colors duration-100 group-hover/card-link:text-blue-400'
        )}
      >
        <h2 className="text-xl font-semibold leading-none">Title</h2>
        <h4 className="text-base font-normal leading-none">
          Subtext about some stuff
        </h4>
      </div>

      <div
        className={classNames(
          'h-0 w-full overflow-hidden transition-all duration-500',
          'group-hover/card-link:h-10 group-hover/card-link:w-full'
        )}
      >
        <div
          className={classNames(
            'flex h-full items-center justify-between px-1 transition-all duration-500',
            'group-hover/card-link:px-6'
          )}
        >
          <span className="text-sm font-semibold uppercase leading-none text-blue-400/75">
            Click now
          </span>
          <ArrowRight size={20} className="fill-blue-400/50" weight="bold" />
        </div>
      </div>
    </div>
  </Link>
)

export default CardLink
