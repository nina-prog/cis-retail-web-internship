package praktikum.AIFB.PRIS.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import praktikum.AIFB.PRIS.entity.Product;

/**
 * This class represents a Data Access Object (DAO) to manage products from the database
 * @author merti
 *
 */
@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Object>{

	/**
	 * Return all products of a specific store (same store_id)
	 * @param store_id
	 * @return List of products of a specific store
	 */
	List<Product> findByStore_id(Long store_id);
}
