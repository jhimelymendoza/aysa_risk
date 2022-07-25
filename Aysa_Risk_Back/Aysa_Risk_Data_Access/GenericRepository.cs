using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Aysa_Risk_Data_Access.Entities;
using Microsoft.EntityFrameworkCore;

namespace Aysa_Risk_Data_Access
{
    public class GenericRepository<TEntity, TKey> : IGenericRepository<TEntity, TKey> where TEntity : Entity<TKey>
    {
        public readonly AysaRiskContext _context;
        private readonly DbSet<TEntity> _entities;

        public GenericRepository(AysaRiskContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _entities = context.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _entities.ToListAsync();
        }

        public List<TEntity> AllEager(params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>();
            foreach (var include in includes)
            {
                query = query.Include(include);
            }
            return query.ToList();
        }

        public async Task<TEntity> GetByIdAsync(TKey id)
        {
            return await _entities.SingleOrDefaultAsync(s => s.Id.Equals(id));
        }

        public void Add(TEntity entity)
        {
            _entities.Add(entity);
        }

        public void Update(TEntity entity)
        {
            _entities.Update(entity);
        }

        public void Delete(TKey id)
        {
            var item = _context.Set<TEntity>().Find(id);
            _context.Set<TEntity>().Remove(item);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync().ConfigureAwait(false) > 0;
        }

        public async Task<TEntity> FindByConditionAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _context.Set<TEntity>().FirstOrDefaultAsync(predicate);
        }

        public void Dispose()
        {
            if (_context != null)
                _context.Dispose();
        }
    }
}
